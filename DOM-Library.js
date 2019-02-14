let domLib = {
  
    getElement : function(idOrClass,atribute){
        if(typeof idOrClass != 'string'||typeof atribute != 'string'){
            return;
        }
        if(idOrClass.toLocaleLowerCase() === 'id'){
            return document.getElementById(atribute);
        }else if(idOrClass.toLocaleLowerCase() === 'class'){
            return document.getElementByClassName(atribute);
        }
        
    },
    getParentElement : function(idOrClass,atribute){
        let element = domLib.getElement(idOrClass,atribute);
        if(element){
            return element.parentElement;
        }

    },
    getSiblingElemet : function(idOrClass,atribute,previousOrNext){
        let element = domLib.getElement(idOrClass,atribute);
        if(element){
            if(previousOrNext.toLocaleLowerCase()==='previous'){
                 return element.previousElementSibling;
            }
            return element.nextElementSibling;
        }

    },
    getChildElements : function(idOrClass,atribute){
        let element = domLib.getElement(idOrClass,atribute);
        if(element){
           return  Array.from(element.children);
        }
    },
    addElement : function(elementForAdd,idOrClass,atribute){
        let elementOnPage = domLib.getElement(idOrClass,atribute);
        if(elementOnPage){
            elementOnPage.appendChild(elementForAdd);
        }
        return this;
    },
    removeElement : function(idOrClass,atribute){
        let elementforRemove = domLib.getElement(idOrClass,atribute);
        if(elementforRemove){
            elementforRemove.remove();
        }
    },
    changeAttribute : function(element,attribute,newValue){
        let attributes =['id','class','data','name'];
        if(!(element instanceof HTMLElement)){
            return;
        }
        if( typeof attribute !== "string"){
            return;
        }
        attribute=attribute.toLocaleLowerCase();
        if (attributes.findIndex(attr => attr === attribute) === -1){
          return;
        }
        element.setAttribute(attribute,newValue);
        return this;

    },
    editTcxtContent : function(element,newText,deleteOldContent){
        if(!(element instanceof HTMLElement)){
            return;
        }
        if( typeof newText !== "string"){
            return;
        }
        if(deleteOldContent){
            element.innerHTML="";
        }
        let text = document.createTextNode(newText);
        element.appendChild(text);
        return text;

 
    },
    editHTMLContent : function(element,newHTML){
        if(!(element instanceof HTMLElement)){
            return;
        }
        if( typeof newHTML === "string"){
            element.innerHTML=newHTML;
            return element.innerHTML;
        }
        if(newHTML instanceof HTMLElement){
            element.appendChild(newHTML);
            return element.innerHTML;
        }
 
    },
    changeStyleonElement : function(element,stylePropOfObj,value){
        if(!(element instanceof HTMLElement)){
            return;
        }
        if(stylePropOfObj instanceof Object){

            for (var property in stylePropOfObj){
                
                element.style[property] = stylePropOfObj[property];
        
            }
        }
        
        if(typeof stylePropOfObj ==='string' && typeof value==='string'){
            
            element.style[stylePropOfObj] = value;
        }
        return this;

    },
    addEvent: function(element, event, eventFunction){
       
        element.addEventListener(event, eventFunction);
        return this;
    }





}

/*
 var e = document.getElementById('test');

   
    


for(let i =0 ;i<=31;i++){
    let elm = document.createElement('div');
    domLib.changeAttribute(elm,'class','pesho');
   console.log( domLib.editTcxtContent(elm,i.toString()));
   domLib.changeStyleonElement(elm,{
    'fontsize':'12px',
    'background-color':'lightgreen',
    'border':'1px dashed black'
   });
   if(i%2===0){
   domLib.changeStyleonElement(elm,'color','red');
   }
    domLib.addElement(elm,'id','test');
}
let df=domLib.getChildElements('id','test');
df=df[df.length-1];
console.log(df);
//domLib.removeElement('id','test');
console.log('ads' instanceof Object)
*/