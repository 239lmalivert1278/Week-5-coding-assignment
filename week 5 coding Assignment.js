class Singer {
    constructor (name, position) {
        this.name = name;
        this.position = position;
    }

describe() {
    return `${this.name} sings ${this.position}.`
}


}

class Group {
    constructor(name) {
        this.name = name;
        this.singers = [];
    }

    addSinger(singer) {
if (singer instanceof Singer) {
    this.singer.push(singer);
} else {
    throw new Error(`You can only add an instance of Singer. Arguement is not a singer: ${singer}`)
}
    }


    describe() {
        return `${this.name} has ${this.singers.length} singers.`;
    }
}

class Menu {
    constructor() {
        this.groups = [];
        this.selectedGroup = null
    }
start() {
    let selection = this.showMainMenuOptions();
    
    while (selection != 0) {
        switch (selection) {
            case '1':
            this.createGroup();
            break;
            case '2':
            this.viewGroup();
            break;  
            case '3':
            this.deleteGroup();
            break;
            case '4':
           this.displayGroups();  
            break;
           default:      
           selection = 0;
        }
        selection = this.showMainMenuOptions();
    }
   
    alert('Goodbye!');
}

showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create new group
    2) view group
    3) delete group
    4) display all groups
    `);
}
showGroupMenuOptions(groupinfo) {
    return prompt(`
    0) back 
    1) create singer 
    2) delete singer 
    ---------------------
    ${groupinfo}
    `);
}

displayGroups() {
    let groupString = '';
    for (let i = 0; i < this.groups.length; i++){
groupString += i + ') ' + this.groups[i].name + '\n';
    }

    alert(groupString);
}

createGroup() {
   let name = prompt('Enter Name of New Group:');
this.groups.push(new Group(name));
}

viewGroup() {
   let index = prompt('Enter the index of the group you wish to view:'); 
   
   if (index > -1 && index < this.groups.length) {
    this.selectedGroup = this.groups[index];
    let description = ' Group Name: ' + this.selectedGroup.name + '\n';

    for (let i = 0; i < this.selectedGroup.singers.length; i++) {
        description += i + ')' + this.selectedGroup.singers[i].name
         + ' - ' + this.selectedGroup.singers[i].position + '\n';
}

let selection = this.showGroupMenuOptions(description);
switch (selection) {
    case '1':
     this.createSinger();
        break;
    case '2':
    this.deleteSinger();    
     }
    }
}
deleteGroup() {
    let index = prompt('Enter name of group you want to delete:');
    if (index > -1 && index < this.groups.length){
        this.groups.splice(index, 1);
    }
  }
 createSinger() { 
 let name = prompt('Enter name for new singer:');
 let position = prompt('Enter position for new singer:');
 this.selectedGroup.singers.push(new Singer(name, position));
 }

 deleteSinger() {
let index = prompt('Enter the index of the singer you wish to delete:');
if (index > -1 && index < this.selectedGroup.singers.length) {
    this.selectedGroup.singers.splice(index, 1);
}
    
}

}






let menu = new Menu();
menu.start();