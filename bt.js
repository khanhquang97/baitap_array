// bài 21. Cho một mảng là một tập các số, tính tổng tất cả các số của mảng này?

var a = [12, 12, 1997];
var sum = a.reduce((a,sum) => {
    return a+sum
});

console.log(sum);

// bài 22. Cho một mảng là một tập các số, tìm số lớn nhất, nhỏ nhất và số trung bình trong mảng này?

var a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];
var maxNumber = Math.max.apply(Math, a);
var minNumber = Math.min.apply(Math, a);
var sum = a.reduce((a,sum) => {
    return a + sum
});
var length = a.length;

console.log(maxNumber);
console.log(minNumber);
console.log(sum/length);

// bài 23. Cho một mảng là một tập các số nguyên, tìm số có tần suất xuất hiện nhiều nhất?

var arr = [1,2,3,4,5,6,7,8,9,3,3,9,8,7,6,5,4,3,2,1]
        var arr2 = arr.sort()
        bai23 = () => {
            var max = 0
            var count = 1
            for (var i=0;i<arr2.length;i++)
            {
                if(arr2[i]===arr2[i + 1])
		{
			count += count
				if(count>=max)
				{
                    max=count
				}	
		}
		else
		{	
            count=1
		}
	}
    console.log( +max)
    
    }
            
//bài 24. Cho một mảng là một tập các số nguyên dương, lọc ra một bảng b gồm tất cả các số là số nguyên tố? (Dùng filter)

a = [1,2,3,2,3,4,6,7];
function isPrime(number){
    if(number < 2) {
        return false;
    }
    for( var i = 2; i <= Math.sqrt(number); i++){
        if(number % i == 0){
            return false;
            break;
        }
    }
    return true;
}
 var prime = a.filter(isPrime);
 console.log(prime);


// bài 25. Cho một mảng là một tập các số nguyên dương, hãy tạo một mảng b là tập hợp bình phương của các số trong mảng a

var a = [1, 2, 3, 4, 5, 6, 7];
var square = a.map((a) => Math.pow(a,2));
console.log(square);

//bài 26. Cho một mảng là một tập các số nguyên dương không trùng giá trị, và một số k. Hãy tìm trong mảng phần có khoảng cách tử gần với k nhất. Vì có thể có nhiều đáp án in ra tất cả vào một mảng.

function nearestNumber(arr, k){
    var a = [];
    var result = [];
    arr.forEach((value,index,array) => {
        array[index] < k ? a.push(k - array[index]): a.push(array[index] - k);
    })
    a.forEach((value,index,array) => {
        array[index] == Math.min(...a) ? result.push(arr[index]) : result;
    })
    return result;
}
var result8 = nearestNumber(e,6);
console.log(result8);

//bài 27. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. Hãy đưa tên và họ về chuẩn tên với ký tự đầu tiên của tên Viết Hoa và tìm tất cả học viên có tên tồn tại chữ cái “a” hoặc “A” và tên dài hơn hoặc bằng 3 ký tự.

var students = [
    {
        id: "T3HXX1",
        firstName: "tung",
        lastName: "doAn HoAnG"
    },
    {
        id: "T3HXX2",
        firstName: "nO",
        lastName: "SHIt"
    },
    {
        id: "T3HXX5",
        firstName: "hIgH",
        lastName: "aS a Kite" 
    }];

var result = students.filter(student => student.firstName.length >= 3)
    .map(
        student => {
            return {
                id: student.id,
                firstName: student.firstName.toLowerCase().replace(student.firstName[0], student.firstName[0].toUpperCase()),
                lastName: student.lastName.toLowerCase().split(" ").map(item => item[0].toUpperCase() + item.slice(1)).join(" ")
            }});

console.log(result);

//bài 28. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. Hãy tìm tất cả học sinh cá biệt của lớp biết rằng học sinh cá biệt có họ là “Do”.

var students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "DuoNg Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]
var result = students.filter(name => name.lastName.split(" ")[0] === "Do")
console.log(result)

//bài 29. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. Hãy sắp xếp danh sách học viên theo tên (firstName).

 var students = [
         {
             id: "T3HXX1",
             firstName: "egAN",
             lastName: "Duong Thuy"
         },
         {
             id: "T3HXX2",
             firstName: "da",
             lastName: "Do Thi Thu"
         },
         {
             id: "T3HXX5",
             firstName: "cinh",
             lastName: "Nguyen Nhat"
         }
     ];
 var a = students.sort(function sapXep(a,b){
     var x = a.firstName;
     var y = b.firstName;
     if (x > y) {return 1;}
     if (x < y) {return -1;}
     return 0;
 })
 console.log(a);

 //bài 30. Cho một mảng là một tập các số nguyên dương, tìm số lớn thứ nhì trong mảng, không có thì in ra -1?

 var arr = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] 
    arr.sort().reverse()
    var arr2 = arr.filter(b => b < Math.max(...arr))
    var i = arr2.indexOf(Math.max(...arr2))
    if ( i == -1) {
        console.log( +i)
    } else {
    console.log( +arr2[i])
    }


//bài 31. Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, tìm xem trong mảng có tồn tại 3 số có tổng bằng k? (1s) , length of array.

var a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
function checkArray(arr,number){
    for(var i = 0; i < arr.length - 2; i++){
        for( var j = i+1; j < arr.length - 1; j++){
            for( var k = j+1; k < arr.length; k++){
                if( arr[i] + arr[j] + arr[k] == number){
                    return 'Yes';
                    break;
                }
            }
        }
    }
    return 'No';
}
console.log(checkArray(array,26));

//bài 32.  Cho một mảng là một tập các số nguyên dương theo thứ tự tăng dần, và một số k. Hãy chèn k vào mảng và đảm bảo mảng ko mất tính tăng dần
 
var a = [1,3,6,9,11,20]
    var k = 13
    var x = a.filter(item => item < k).length
    a.splice(x, 0, k)
    console.log(a)


//bài 33. Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, sắp xếp mảng mà không dùng hàm sort() cho sẵn?

var a = [5,5,4,4,3,3,2,2,1,1]
var a2 = []
for (var i = 0; i<a.length; i++) {
    for(var j = 0; j <= Math.max(...a); j++) {
        if (a[i] == j) {
            a2.unshift(a[i])
        }
    }
}
console.log(a2) 
