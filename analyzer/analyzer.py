#!/usr/bin/python

import zerorpc
import time

class HelloRPC(object):
    '''pass the method a name, it replies "Hello name!"'''
    def hello(self, name):
        time.sleep(5)
        return "Johann the BarBatan, {0}!".format(name)
  
    def bye(self, name):
        return "Fuc llu, {0}!".format(name)

def main():
    s = zerorpc.Server(HelloRPC())
    s.bind("tcp://*:4242")
    s.run()

if __name__ == "__main__" : main()

