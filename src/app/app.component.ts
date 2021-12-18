import { Component } from '@angular/core';

export interface NodeModel {
	type: 'folder' | 'file' | 'unset';
	name: string;
	children: NodeModel[];
	id: string;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	base: NodeModel[] = [
		{
			id: '1',
			type: 'folder',
			name: 'My Computer',
			children: [
				{
					id: '1-1',
					type: 'file',
					name: 'WallPaper.png',
					children: [],
				},
				{
					id: '1-2',
					type: 'folder',
					name: 'Projects',
					children: [
						{
							id: '1-2-1',
							type: 'file',
							name: 'random.png',
							children: [],
						}
					],
				}
			],
		},
		{
			id: '2',
			type: 'folder',
			name: 'My Songs',
			children: [],
		}
	];

	adding: boolean = false;
	name: any = '';

	toggleAdding() {
		this.adding = !this.adding;
	}

	addToRoot() {
		if(this.adding) {
			this.toggleAdding();
			this.base.push({
				id: `${this.base.length + 1}`,
				name: this.name,
				type: 'folder',
				children: [],
			});
		}
	};

	removeNodeFromTree(id: string) {
		this.base = this.base.filter(node => node.id !== id);
	}
}
