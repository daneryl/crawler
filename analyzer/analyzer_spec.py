#!/usr/bin/env python
# -*- coding: utf8 -*-

__author__ = "Luis Rivas Vañó"
__email__ = "luinix@gmail.com"

import unittest
from analyzer import Analyzer

text_pdf = './testing_documents/pdf_text.pdf'
scanned_pdf = './testing_documents/pdf_scanned.pdf'

class TestAnalyzer(unittest.TestCase):

    def setUp(self):
        self.analyzer = Analyzer()

    def test_can_check_file_mimetype(self):
        mimetype = self.analyzer.mimetype(text_pdf)
        self.assertEquals(mimetype, 'PDF document, version 1.4')

        mimetype = self.analyzer.mimetype(scanned_pdf)
        self.assertEquals(mimetype, 'PDF document, version 1.4')

    def test_should_get_metadata_from_text_pdf(self):
        metadata = self.analyzer.analyze(text_pdf)
        self.assertEquals(metadata['Producer'], u'Acrobat Distiller 7.0 (Windows)')
        self.assertEquals(metadata['Creator'], u'Acrobat PDFMaker 7.0 para Word')

    def test_should_get_metadata_from_image_pdf(self):
        metadata = self.analyzer.analyze(scanned_pdf)
        self.assertEquals(metadata['Producer'], u'Readiris Build 6251')
        self.assertEquals(metadata['Creator'], u'Readiris Build 6251')

if __name__ == '__main__':
    unittest.main()

