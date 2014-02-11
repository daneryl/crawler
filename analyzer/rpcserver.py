#!/usr/bin/python

import zerorpc
import time
from analyzer import Analyzer

class RPSServer(object):
    '''pass the method a name, it replies "Hello name!"'''
    def analyze(self, filepath):
        return Analyzer.analyze(filepath)
  
def main():
    s = zerorpc.Server(RPCServer())
    s.bind("tcp://*:4242")
    s.run()

if __name__ == "__main__" : main()

