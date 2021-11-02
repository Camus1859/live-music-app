import unittest
from unittest import TestCase

from demo_tape import demo_tape

class TestIntegration(TestCase):
    def test_send_sms(self):
        sid = demo_tape.send_sms_with_top_justin_bieber_track()
        self.assertTrue(sid.startswith('SM'))

if __name__ == "__main__":
    unittest.main()
