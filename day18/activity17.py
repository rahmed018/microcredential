"""
Reema Ahmed
Tuesday, Jan 31
Activity 17: Conditional Statement 
"""

# Example 1
print('....Example 1.....')
age = int(input('enter age'))
if age>15:
    print('Adult')
else: 
    print('under age')
print('age check point')

#Example 2
print('........Exampe 2...if else....')
grade=int(input('Enter a grade'))

if grade>=90 and grade<=100:
 print('GPA=A')
elif grade>=80 and grade<90:
    print('GPA=B')
elif grade>=70 and grade<60:
    print('Grade=c')   
elif grade>60 and grade <=0:
    print('GPA = F')  
else :
    print('Invalid') 

#Example 3
print('......Example 3.....')
kidage=int(input('Enter an age between 5 and 10'))
if kidage==5 or kidage ==6:
    print('Eat pasta')
elif kidage==7 or kidage==8:
    print('eat fish and veggie')   
elif kidage==9 or kidage==10:
    print('eat ice cream')    
else:
    print('wrong age')    

# Example 4
print('...Example 4.....')   
for x in range(0,5):
    print('counting: ', x)

 #Example 5
print('.....Example 5....')   
animals=['fish', 'chicken', 'cat', 'birds', 'mamals']
for i in animals:
    print(i)

#Example 6
print('...Example 6....')   
for m in range (3,30,2):
    print ('m=', m)
#decreasing order
for n in range(10, 0, -1):
    print('n=', n) 

#Example 7
print('...Example 7....')   
for m in range (3,30,2):
    print('print before break')
    if m==17:
        break
    print ('m=', m)
#decreasing order
for n in range(10, 0, -1):
    print('n=', n) 
