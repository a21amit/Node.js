function fibonacciGenerator(n) {
    var t1 = 0;
    var t2 = 1;
    var next = t1 + t2;
    var list = [];
    if (n == 1) {
        list.push(t1);
    }
    else if (n == 2) {
        list.push(t1, t2);

    }
    else {
        list.push(t1, t2);
        for (var i = 3; i <= n; i++) {
            list.push(next);
            t1 = t2;
            t2 = next;
            next = t1 + t2;

        }
    }
    //Return an array of fibonacci numbers starting from 0.
    return list;
}
fibonacciGenerator(4);