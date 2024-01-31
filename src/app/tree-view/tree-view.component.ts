import { Component } from '@angular/core';


interface Tree {
  id: number;
  name?: string | Tree;
  isActive: boolean;
  isEditing?: Boolean
  open?: Boolean
  menu?: Boolean
  hide?: Boolean
  children?: Tree[];
}

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent {
  treeArr: Tree[] = [{
    id: 1,
    name: "Tree View",
    isActive: true,
    isEditing: false,
    open: true,
    menu: false,
    hide: true,
    children: [
      {
      id: 2,
      name: "Parent",
      isActive: true,
      isEditing: false,
      open: true,
      menu: false,
      children: [
        {
          id: 3,
          name: "Children",
          isActive: true,
          isEditing: false,
          open: true,
          menu: false,
          children: [
            {
              id: 8,
              name: "Children",
              isActive: true,
              isEditing: false,
              open: true,
              menu: false,
              children: []
            }
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Parent",
      isActive: true,
      isEditing: false,
      open: false,
      menu: false,
      children: [
        {
          id: 5,
          name: "Children",
          isActive: true,
          isEditing: false,
          open: false,
          menu: false,
          children: []
        }
      ]
    },
    {
      id: 6,
      name: "Parent",
      isActive: true,
      isEditing: false,
      open: false,
      menu: false,
      children: [
        {
          id: 7,
          name: "Children",
          isActive: true,
          isEditing: false,
          open: true,
          menu: false,
          children: []
        }
      ]
    }
  ]
  }];

  newChildName: string = '';
  isAddChildModalOpen: boolean = false;
  showContextMenu = false;

  constructor() {} // Make sure to import NgbModal and provide it in your module
  

  onRightClick(event: MouseEvent, node: Tree): void {
    event.preventDefault(); // Prevent the default browser context menu
    if(!node.menu)
    {
      node.menu = true
    }
    console.log("target = " + node.menu);
    console.log(this.treeArr)

    // You can also get the mouse coordinates if needed
    // const mouseX = event.clientX;
    // const mouseY = event.clientY;

    // Perform any other actions you need on right-click
  }

  closeMenu(node: Tree): void {
    node.menu = false;
  }

  modalnode : any;

  openModal(a: any): void {
    this.isAddChildModalOpen = true;
    this.modalnode = a
  }

  // addChild(childName: string): void {
  //   if (this.treeArr[0].children) {
  //     const newChild: Tree = {
  //       id: this.generateUniqueId(),
  //       parent: childName,
  //       children: []
  //     };

  //     this.treeArr[0].children.push(newChild);
  //   }

  //   this.closeModal();
  // }

  // addChild(parentNode: Tree, childName: string): void {
  //   const newChild: Tree = {
  //     id: this.generateUniqueId(),
  //     parent: childName,
  //     children: []
  //   };

  //   if (!parentNode.children) {
  //     parentNode.children = [];
  //   }

  //   parentNode.children.push(newChild);
  // }

  addChild(parentNode: Tree, childName: string): void {
    const newChild: Tree = {
      id: this.generateUniqueId(),
      name: childName, // Set the parent to be the same as the selected node
      isActive: true,
      isEditing: false,
      open: true,
      menu: false,
      children: []
    };
  
    if (!parentNode.children) {
      parentNode.children = [];
    }

    parentNode.open = true;
    parentNode.children.push(newChild);
  }

  // editNodeName(node: any): void {
  //   const newName = prompt('Enter new name:', node.name);
  //   if (newName !== null && newName !== undefined) {
  //     node.name = newName;
  //   }
  // }

  toggleEditState(node: any): void {
    node.isEditing = !node.isEditing;
  }

  editNodeName(node: any): void {
    this.toggleEditState(node);
  }


  toggle(node:Tree){
    node.open = !node.open
  }

  deactivate(node:Tree){
    if(node.isActive){
      node.isActive = false;
    }
    if(node.open){
      node.open = false;
    }
    console.log(node);
  }

  activate(node:Tree){
    node.isActive = true;
    console.log(node);
  }
  
  closeModal(): void {
    this.isAddChildModalOpen = false;
    this.newChildName = '';
  }

  private generateUniqueId(): number {
    return Math.floor(Math.random() * 1000);
  }
}
