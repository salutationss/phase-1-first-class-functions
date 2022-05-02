function receivesAFunction(funkyIsh) {
    funkyIsh();
};


function returnsANamedFunction() {
    return function jCrew() {
        console.log("This works");
    };
}

function returnsAnAnonymousFunction() {
    return () => console.log("anonymous function");
}