/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Event } from 'vs/base/common/event';
import { IDiskFileChange, ILogMessage } from 'vs/workbench/services/files/node/watcher/watcher';

export interface IWatcherRequest {
	path: string;
	excludes: string[];
}

export interface IWatcherOptions {
	pollingInterval?: number;
	usePolling?: boolean;
}

export interface IWatcherService {
	watch(options: IWatcherOptions): Event<IDiskFileChange[]>;
	setRoots(roots: IWatcherRequest[]): Promise<void>;
	setVerboseLogging(enabled: boolean): Promise<void>;
	onLogMessage: Event<ILogMessage>;
	stop(): Promise<void>;
}