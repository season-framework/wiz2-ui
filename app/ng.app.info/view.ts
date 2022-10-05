import { OnInit, Input } from '@angular/core';

export class Component implements OnInit {
    @Input() scope;
    @Input() editor;

    public data: any = {};
    public loading: boolean = true;

    public async ngOnInit() {
        this.data = await this.editor.tab().data();
        this.loading = false;
        await this.scope.render();
    }
}