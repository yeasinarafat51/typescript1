## BLOG
 ## TypeScript-এ Interface এবং Type এর মধ্যে পার্থক্য
## Interface
Interface তৈরি করা হয় মূলত object-এর shape বা structure নির্ধারণের জন্য।
Interface সহজে অন্য interface কে extends করতে পারে।
Interface-এ declaration merging হয়। মানে তুমি যদি একই নামের দুটি interface লেখো, TypeScript সেগুলোকে একত্রে merge করে।
Interface মূলত object structure এর জন্য ব্যবহৃত হয়।

## Type
Type ব্যবহার করা হয় primitive type, union, tuple, function signature সহ আরও অনেক কিছু ডিফাইন করার জন্য।
Type alias ও intersection (&) ব্যবহার করে extend করা যায়, তবে interface-এর extend সাপোর্ট বেশি সরল ও readable।
Type alias কখনই merge হয় না; একই নামে দুইবার declare করলে error দেয়।
Type alias বেশি flexible কারণ এটি union type, tuple type, function type, primitive type—সবকিছু represent করতে পারে।



## Explain the difference between any, unknown, and never types in TypeScript.

## any
any মানে হলো আমি TypeScript কে বলছি সবকিছু ignore করো।
যেকোনো value এতে assign করা যায় এবং যেকোনো property access করলেও error দেয় না।
## unknown
unknown মানে value যেকোনো টাইপ হতে পারে, কিন্তু type-check না করে তুমি কিছুই করতে পারবে না।

## never
কখনো return হবে না
