import type {
	SetStorage,
	WidthProp,
} from '@/types';


export function useGetStorage(storageType: string, storageName: string): string | null {
	if (storageType === 'local') {
		return localStorage.getItem(storageName);
	}

	if (storageType === 'session') {
		return sessionStorage.getItem(storageName);
	}

	return '';
}


export function useSetStorage({ action = 'update', resizedWidth, storageType, storageName, saveWidth, rail }: SetStorage): void {
	if (!saveWidth || rail) {
		return;
	}

	let width: WidthProp = resizedWidth;
	width = width ?? undefined;

	if (action === 'set') {
		width = useGetStorage(storageType as keyof SetStorage, storageName as keyof SetStorage) ?? '';
		width = width || resizedWidth;
	}

	if (storageType === 'local') {
		localStorage.setItem(storageName as keyof SetStorage, String(width));
	}

	if (storageType === 'session') {
		sessionStorage.setItem(storageName as keyof SetStorage, String(width));
	}

	return;
}
