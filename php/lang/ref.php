<?php
 /**
  * PHP Programming Language Reference.
  * @author ADAL KHAN - mdadalkhan@gmail.com 23 NOV 2024
  * notes from users below the code are very important
  * */

# 01. PHP = Hypertext Preprocessor
# 02. PHP itself is a template engine unlike other server side language.

# 03. Types(used as static typing) - use var_dump() to explore
  null     = indicates there is no value(keyword), unit type, undefined and unset variable holds null
  bool     = holds true or false(keyword)
  int      = integer values(used as return type only)
  float    = floating point number(used as return type only)
  string   = Array of Characters(used as return type only), single quoted e.g 'this is a string', double quoted, heredoc and nowdoc
  array    = collection of data(used as return type only), $arr = array(key=>value,key2=>value2)
  object   = used defined type(used as return type only)
  callable = callable or callback type(used as return type only), call_user_func()
  resource = special variable holding a reference to external object, get_resource_type() 
  mixed    = take any value
  void     = return nothing. (not recommened to use)
  never    = never is a return type indicate that function does not terminate
  iterable = build-in compile type alias for array | Traversable, used in foreach with generator

# Type declaration used within classes
  self     = The value must be an instanceof the same class as the onein which the type declaration is used.
  parent   = The value must be an instanceof a parent of the classin which the type declaration is used. 
  static   = static is a return-only type which requires that thevalue returned must be an instanceof the same class as the onethe method is called in.Available as of PHP 8.0.0. 

# Value type  - true or false 


# 04. User defined types(Object, enumeration-closed set of possible values)

  enum fruit {
  	case apple;
  	case berry;
  }

  function tEnum(public/private fruit $f){
  	// Declaration
  }

  tEnum(fruit::apple) // used in function call

# 05. Type declaration(adding static typing) 
# 06. Type Juggling  

 