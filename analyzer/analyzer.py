#!/usr/bin/env python
# -*- coding: utf8 -*-

__author__ = "Luis Rivas Vañó"
__email__ = "luinix@gmail.com"

import magic
import chardet
from pdfminer.pdfparser import PDFParser, PDFDocument

class Analyzer:
    def mimetype(self, path):
        return magic.from_file(path)

    def analyze(self, path):
        return self.get_pdf_metadata(path)

    def get_pdf_metadata(self, path):
        pdf = open(path, 'rb')
        parser = PDFParser(pdf)

        document_data = PDFDocument()
        parser.set_document(document_data)
        document_data.set_parser(parser)
        document_data.initialize()

        return self.decode_metadata(document_data.info[0])

    def determine_encoding(self, data):
        detection = chardet.detect(data)
        return detection['encoding']

    def decode_metadata(self, metadata):
        for key in metadata:
            encoding = self.determine_encoding(metadata[key])
            decoded_string = metadata[key].decode(encoding).replace(u'\ufeff', '')
            metadata[key] = decoded_string

        return metadata

