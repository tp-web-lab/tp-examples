def altitude(x):
    """
    Calculate the altitude based on the horizontal distance x.
    """
    return x**2/1000

def slope(f, x0, x1):
    """
    Calculate the rate of change of the function f 
    between the starting point x0 and the end point x1.
    """

    assert(x1 != x0) # <1> 
    return (f(x1) - f(x0)) / (x1 - x0)

# Calculate the slope of the altitude function for decreasing portions of delta.

if __name__ == "__main__":  # <2> 
    for n in range(7):      # <3> 
        delta = 10**(-n)
        x0 = 50
        x1 = x0 + delta
        print(f"Portion: {delta}, Slope: {slope(altitude, x0, x1)}")
    # <4>
        