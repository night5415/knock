function getArray() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            return Promise.resolve(json);
        });
    
}

export function run() {
    function AppViewModel() {
        self = this;
        self.personArray = ko.observableArray();
        self.personName = ko.observable('Mike');
        self.personAge = 44;
        self.btnClick = function (e) {
            self.personArray.push({ 'name': self.personName(), 'id': self.personArray.length + 1 });
        };
        self.hasName = ko.computed(function () {
            return !!self.personName();
        });
        getArray()
            .then(people => {
                self.personArray(people);
            });
    }

    window.vm = new AppViewModel();
    ko.applyBindings(window.vm); 
}



 