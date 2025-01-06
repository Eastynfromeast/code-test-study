function solution(my_string, queries) {
    for(let i=0; i < queries.length;i++){
        let my_string_array = [...my_string];
        const [a,b] = queries[i];
        let reversedString = my_string_array.slice(a,b+1).reverse().join("");
        my_string_array.splice(a,b-a+1,reversedString);
        my_string = my_string_array.join("");
    }
    return my_string;
}

