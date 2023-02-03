"""
Reema Ahmed
activity 18: while loop and function
Feb 2, 2023
"""
# example 1
print(" ---------- Example 1: counting using while loop --------- ")
i = 0
while i<6:
    print('i = ', i)
    i+=1
# example 2
print(" --------- Example 2: check point using while loop -------- ")
number = int(input('Enter a number between 0 and 10: '))
# create a while ask the user to enter a number if the number is not between 0 and 10
while number<0 or number>10:
    number = int(input('You must enter a number between 0 and 10:'))

    print('Entered number = ', number)
    # example 3: print odd numbers between 12 and 30
print(" ------ Example 3: nest if statement in a while loop ------ ")
y = 12
while y<30:
    if y%2 !=0:
        print('y = ', y)
     y+=1
# optional way to write example 3 using the continue keyword.
while y<30:
    if y%2 ==0:
        continue
