 
  function getElement (selection){
    const element = document.querySelector(selection)
    if(element){
        return element;
    }
    throw new Error(
        `please check "${selection}" selector , no such element exisits`
    );
 };
 
 function Counter(element, value){
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector(".reset");
    this.increaseBtn = element.querySelector(".increase");
    this.decrease = element.querySelector(".decrease");
    this.valueDOM = element.querySelector(".value");
    this.valueDOM.textContent = this.value;
 }

 Counter.prototype.increase = function(){
     
 }

 const firstCounter = new Counter(getElement(".first-counter"), 300);
 const secondCounter = new Counter(getElement(".second-counter"), 200);



//  getElement(".first-counter")