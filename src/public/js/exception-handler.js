function ExceptionHandler(){
    this.list = [];
    this.add = function(exception){
        this.list.push(exception);
    },
    this.log = function(){
        this.list.forEach(function(exception){
            if(exception.isError === true)
                console.error(exception.text);
            else
                console.warn(exception.text);
            
        });        
        this.list = [];
    }
}