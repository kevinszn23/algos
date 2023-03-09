hey = "Take it"
hi = "easy"
hello = "dude!"

print(f"{hey} {hi} {hello}")
print(f"{hi} {hey} \n {hello}")

# converting data types
num_tacos = 100
msg = "There are " + str(num_tacos) + " tacos"
print(msg)
# need to add str before num_tacos because can't concatenate str and int

alphabet = "abcd"
print(f"{alphabet.split()}")
# .split splits a string into a list (array in JS)

ghost = "boo"
print(f"{ghost.upper()}")
# .upper() uppercases everything
print(f"{ghost.capitalize()}")
# .capitalize() only capitalizes the first letter in the string

scary = "BOO"
print(f"{scary.lower()}")
# .lower() lowercases everything

statement = "Then I went to the store I like"
print(statement.replace("I", "you"))

is_in_str = "eggs" in "green eggs and ham"
print(is_in_str)
is_in_str2 = "eggs" in "I love tacos"
print(is_in_str2)

length = len("tacos")
print(length)

# random note to self but array length and index are different because arrays are zero indexed

# x = 0
# x = 1
x = -1
if x < 0:
    print("negative")
elif x == 0:
    print("zero")
else:
    print("positive")

count = 0
while count < 5:
    print(count, " is less than 5")
    count = count + 1
else:
    print(count, " is not less than 5")

count = 15
for i in range(1, count):
    print(i)
else:
    print("done")
# range returns a sequence of numbers, starting from 0 by default and increments by 1 by default, and stops before the specified number

for i in range(1, 21):
    # if i is divisible by 3, print fizz
    if i % 3 == 0 and i % 5 == 0:
        print("fizzbuzz")
    elif i % 3 == 0:
        print("fizz")
        # if i is divisible by 5, print buzz
    elif i % 5 == 0:
        print("buzz")
    else:
        print(i)