export interface IEducationData {
	_id: string;
	value: string;
	index?: number;
}
export interface IWorkersData {
	_id: string;
	value: string;
	education: string;
	name: string;
}

export interface IApiError {
	message: string;
	name: string;
}
