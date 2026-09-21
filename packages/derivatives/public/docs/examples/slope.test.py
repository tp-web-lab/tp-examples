import runpy
import unittest
from pathlib import Path

# Upload the student's code.
namespace = runpy.run_path(
    str(Path(__file__).with_name("slope.init.py"))
)
slope = namespace["slope"]


class TestSlope(unittest.TestCase):
    def test_identical_xcoordinates(self):
        with self.assertRaises(AssertionError):
            slope(lambda x: x**2 / 1000, 50, 50)

    def test_quadratic_function(self):
        self.assertAlmostEqual(
            slope(lambda x: x**2 / 1000, 50, 51), (50 + 51) / 1000
        )

    def test_constant_function(self):
        self.assertAlmostEqual(
            slope(lambda x: 42, 2, 5), 0
        )

    def test_linear_function(self):
        self.assertAlmostEqual(
            slope(lambda x: 3*x + 7, 2, 5), 3
        )

    def test_negative_slope(self):
        self.assertAlmostEqual(
            slope(lambda x: -2*x + 5, 0, 10), -2
        )

    def test_inverse_interval(self):
        self.assertAlmostEqual(
            slope(lambda x: x**2, 5, 2), 7
        )

    def test_road_sections(self):
        def altitude(x):
            return x**2 / 1000

        for n in range(7):
            with self.subTest(n=n):
                x0 = 50
                x1 = x0 + 10**(-n)

                # The exact slope of this quadratic function.
                expected = (x0 + x1) / 1000

                self.assertAlmostEqual(
                    slope(altitude, x0, x1),
                    expected,
                    delta=1e-8,
                    msg=f"Incorrect slope for n={n}",
                )