
var obj={
    arr:[{rollno:1,name:"aaa",marks:10},
    {rollno:2,name:"bbb",marks:60}

    ],
    getStudents:function(){
        return this.arr;
    },
    getStudent:function(rno){
    for(let i=0;i<this.arr.length;i++){
        if(this.arr[i].rollno==rno){
            return this.arr[i];
        }


    }
    },
    addStudent:function(obj){
        this.arr.push(obj);
        return obj;
    },

    updateStud:function(rno,newMks){
        for(let i=0;i<this.arr.length;i++){
            if(this.arr[i].rollno==rno){
                this.arr[i].marks=newMks;

                return this.arr[i];
            }
        }
    },
    removeStud:function(rno){
        for(let i=0;i<this.arr.length;i++){
            if(this.arr[i].rollno==rno){
                this.arr.splice(i,1);
                return rno;
            }
        }
    }

    

   
    
}
module.exports=obj;




