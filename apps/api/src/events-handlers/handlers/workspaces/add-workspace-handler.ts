
import { NOTIFICATIONS_SERVICE } from '@app/common';
import { WorkspaceRepository } from '@app/common/dbhelper/workspace.repository';
import { Inject } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ClientProxy } from '@nestjs/microservices';
import { AddWorkspaceEvent } from '../../events';

@EventsHandler(AddWorkspaceEvent)
export class AddWorkspaceHandler implements IEventHandler<AddWorkspaceEvent> {
    constructor(
        @Inject(NOTIFICATIONS_SERVICE) private readonly notificationsClient: ClientProxy,
        private readonly workspaceRepository: WorkspaceRepository,
    ) { }
    async handle(event: AddWorkspaceEvent) {
        const { name } = event;
        console.log('name', name);
        this.notificationsClient.emit('workspaces_received', { data: "hello ahmed in notidfications service" })
    }
}
