
class EventHandler
{
    constructor(arr){
        this.arr=arr;
    }

    getEventsBetweenDates=(start, end)=>{
        let val = this.arr.filter((element => element.dateStart >= start)&&(element => element.dateEnd <= end));
		return val;
    }

    getByMonth=(month)=>{
        let val = this.arr.prototype.filter(element=>element.dateStart=includes(month));
		return val;
    }

    getUniqueDateAndSort=()=>{
        /*let val = this.arr.sort(function(a, b){return a-b});
        let uniqueArr = [...new Set(val)];
		return uniqueArr;*/

        let val = [];
		val = this.arr.map(element => {
			let uniqueArr = new Object();
			uniqueArr.name = element.name;
			uniqueArr.description = element.description;
            uniqueArr.dateStart = element.dateStart;
            uniqueArr.dateEnd = element.dateEnd;
			return uniqueArr;
		});
		
		return val;
    }

    getSummary=(...args)=>{
        if(args == null || args == ""){
			args = this.arr;
		}
		if(args.length == 1){
			let arr = args[0];
			let valA = [];
			valA = arr.map(element => {
				let stringE = "On "+element.dateStart+": "+element.name+" ("+element.description+")";
				return stringE;
			});
			
			return valA;
		}
		
		let valA = [];
		valA = args.map(element => {
			let stringE = "On "+element.dateStart+" to "+element.dateEnd+":  "+element.name+" ("+element.description+")";
				return stringE;
		});
		
		return valA;
    }


}