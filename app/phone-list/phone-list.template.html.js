(function () {
    function class_1() {
    }
    return class_1;
}());
"container-fluid" >
    (function () {
        function class_2() {
        }
        return class_2;
    }());
"row" >
    (function () {
        function class_3() {
        }
        return class_3;
    }());
"col-md-2" >
    !--Sidebar;
content-- >
    Search;
ng - model;
"$ctrl.query" /  >
    /p>
    < p >
    Sort;
by: ng - model;
"$ctrl.orderProp" >
    value;
"name" > Alphabetical < /option>
    < option;
value = "age" > Newest < /option>
    < /select>
    < /p>
    < /div>
    < div;
var default_1 = (function () {
    function default_1() {
    }
    return default_1;
}());
"col-md-10" >
    !--Body;
content-- >
    (function () {
        function class_4() {
        }
        return class_4;
    }());
"phones" >
    ng - repeat;
"phone in $ctrl.phones | filter:$ctrl.query | orderBy:$ctrl.orderProp";
var default_2 = (function () {
    function default_2() {
    }
    return default_2;
}());
"thumbnail phone-list-item" >
    href;
"#!/phones/{{phone.id}}";
var default_3 = (function () {
    function default_3() {
    }
    return default_3;
}());
"thumb" >
    ng - src;
"{{phone.imageUrl}}";
alt = "{{phone.name}}" /  >
    /a>
    < a;
href = "#!/phones/{{phone.id}}" > {};
{
    phone.name;
}
/a>
    < p > {};
{
    phone.snippet;
}
/p>
    < /li>
    < /ul>
    < /div>
    < /div>
    < /div>;
