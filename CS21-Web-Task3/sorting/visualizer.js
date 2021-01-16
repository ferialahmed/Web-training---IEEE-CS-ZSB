const input=document.getElementById('myInput');
const key=document.getElementById('key');
const search=document.getElementById('search');
const sort=document.getElementById('sort');
const div=document.getElementById('output');
const ans=document.createElement('h3');
ans.className='output';
search.addEventListener('click',function(){
    const value=input.value;
    const keyItem=key.value
    const array=value.split(" ");
    function insertionSort(inputArr) {
        for (let i = 1; i < inputArr.length; i++) {
            let cur = (inputArr[i]);
            let j = i-1; 
            while ((j > -1) && (cur <inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = cur;
        }
    return inputArr;
    }
    const insertionsort=insertionSort(array);
    function LinearSearch(arr, key){
    let results = []
    for(let i = 0; i < arr.length; i++){
        if((arr[i]) === key){
            var index=i;
        }
    }
    if(!index){
        return -1
    }

    return index;
}   
    
    
    ans.innerHTML='Index: '+LinearSearch(insertionsort,keyItem);
    div.append(ans);
    console.log(LinearSearch(insertionsort,keyItem));
});
sort.addEventListener('click',function(){
    const val=input.value;
    const arr=val.split(" ");
    const len=arr.length;
     function Quicksort(arr,start,end){
        if(start<end){
            const position=partition(arr,start,end);
             Quicksort(arr,start,position-1);
             Quicksort(arr,position+1,end);
            return arr;
        }
    }
     function partition(arr,start,end){
        pivot=arr[end];
        pivotIndex=start;
        for(i=start;i<end;i++){
            if (arr[i]<pivot){
//                pivotIndex+=1;
                [arr[pivotIndex],arr[i]]=[arr[i],arr[pivotIndex]];
                pivotIndex+=1;
            }
        }
        [arr[end],arr[pivotIndex]]=[arr[pivotIndex],arr[end]];
//         console.log(pivotIndex);
        return pivotIndex;
    }
    ans.innerHTML='After sorting: '+Quicksort(arr,0,len);
    div.append(ans);
    
})



