import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeModel } from '../app.component';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

  constructor() { }

  @Input() node: NodeModel | null = null;
  @Output() removeNode = new EventEmitter<string>();

  adding: { state: boolean; type: 'folder' | 'file' | 'unset' } = {
		state: false,
		type: 'unset',
	};
	name: any = '';

	toggleAdding() {
		this.adding = {
			state: !this.adding.state,
			type: 'unset',
		};
	}

  addingFolder() {
    this.adding = { ...this.adding, type: 'folder' }
  }

  addingFile() {
    this.adding = { ...this.adding, type: 'file' }
  }

  add() {
    this.node?.children?.push({
      id: `${this.node.id}-${this.node.children.length}`,
      type: this.adding.type,
      name: this.name,
      children: [],
    });
    this.toggleAdding();
  }

  deleteNode(id: string) {
    this.removeNode.emit(id);
  }

  removeNodeFromTree(id: string) {
    if(this.node) {
      this.node.children = this.node.children.filter(item => item.id === id);
    }
  }

  ngOnInit(): void {
  }

}
