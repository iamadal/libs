/**
 * 01. Function without a name is called  anonymous function - Lambda Function
 * 02. Return Statement can hold public method and properties
 */



 (function(){
   // private Scope

   return {
       //public Scope;
   }
 })(); // We Can pass any type of argument here


 // or - Retunign One Function call - this is called Closure
 // Calling an anonymous functonn from the scope other function

 (function(){
    // private Scope
 
    return function() {
        //public Scope;
    }
  })(); // We Can pass any type of argument here
 




  function Closure(){
      return function(num){
          if(num<0) console.log('+')
          if(num>0) console.log('-')
      }

  }

  Closure()(12); // Calling the Closure

  // Secnod way to access Closure
  var C = Closure();
  var M = C(-17);

  /**
   * Since closures carry with them the containing function ’ s scope, they take up more
memory than other functions. Overuse of closures can lead to excess memory
consumption, so it ’ s recommended to use them only when absolutely necessary.
   */


  function createFunctions(){
    
    var result = new Array();
    for (var i=0; i < 10; i++){
    result[i] = function(){
    return i;
    };
    }
    
    return result;
    }


// BEST WAY

function createFunctions(){
    var result = new Array();
    for (var i=0; i < 10; i++){
    result[i] = function(num){
    return function(){
    return num;
    };
    }(i); // Passing i to the Function
    }
    return result;
    }



    /**
     * Using the this object inside closures introduces some problems. The this object is bound at runtime
based on the context in which a function is executed: when used inside global functions, this is equal to
window , whereas this is equal to the object when called as an object method. Anonymous functions are
considered to be global in this context, so the this object always points to window . Due to the way
closures are written, however, this fact is not always obvious.
     */





     function(){
//block code here
})(); //error!

//This code causes a syntax error because JavaScript sees the function keyword as the beginning of a
//function declaration, and function declarations cannot be followed by parentheses. Function expressions ,
//however, can be followed by parentheses. To turn the function declaration into a function expression,
//you need only surround it with parentheses like this:


    //The basic syntax of an anonymous function used as a block scope (often called a private scope ) is as
    // follows:
    
    (function(){
    //block code here
    })();



    /**
     * This syntax defines an anonymous function that is called immediately. The function declaration is
enclosed in parentheses to indicate that it ’ s actually a function expression. This function is then called via
the second set of parentheses at the end. If this syntax is confusing, consider the following example:
     */


    //These private scopes can be used anywhere variables are needed temporarily, as in this example:
    function outputNumbers(count){
    (function () {
    for (var i=0; i < count; i++){
    alert(i);
    }
    })();
    alert(i); //causes an error
    }


    // USe prototype to define Static Variabes


    // module Pattern

    var singleton = function(){
        //private variables and functions
        var privateVariable = 10;
        function privateFunction(){
        return false;
        }
        //privileged/public methods and properties
        return {
        publicProperty: true,
        publicMethod : function(){
        privateVariable++;
        return privateFunction();
        }
        };
        }();


// 
var application = function(){
    //private variables and functions
    var components = new Array();
    //initialization
    components.push(new BaseComponent());
    //public interface
    return {
    getComponentCount : function(){
    return components.length;
    },
    registerComponent : function(component){
    if (typeof component == “object”){
    components.push(component);
    }
    }
    };
    }()









    // Modulo Patterns - Return an Object

    var application = function(){
        //private variables and functions
        var components = new Array();
        //initialization
        components.push(new BaseComponent());
        //create a local copy of application
        var app = new BaseComponent();
        //public interface
        app.getComponentCount = function(){
        return components.length;
        };
        app.registerComponent = function(component){
        if (typeof component == “object”){
        components.push(component);
        }
        };
        //return it
        return app;
        }();
        // 