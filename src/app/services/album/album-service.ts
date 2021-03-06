import { Injectable } from '@angular/core';
import { AlbumData } from '../../common/data/entities/album-data';
import { BaseTrackRepository } from '../../common/data/repositories/base-track-repository';
import { FileSystem } from '../../common/io/file-system';
import { BaseTranslatorService } from '../translator/base-translator.service';
import { AlbumModel } from './album-model';
import { BaseAlbumService } from './base-album-service';

@Injectable()
export class AlbumService implements BaseAlbumService {
    constructor(
        private trackRepository: BaseTrackRepository,
        private translatorService: BaseTranslatorService,
        private fileSystem: FileSystem
    ) {}

    public getAllAlbums(): AlbumModel[] {
        const albumDatas: AlbumData[] = this.trackRepository.getAllAlbumData();

        return this.createAlbumsFromAlbumData(albumDatas);
    }

    public getAlbumsForArtists(artists: string[]): AlbumModel[] {
        const albumDatas: AlbumData[] = this.trackRepository.getAlbumDataForTrackArtists(artists);

        return this.createAlbumsFromAlbumData(albumDatas);
    }

    public getAlbumsForGenres(genres: string[]): AlbumModel[] {
        const albumDatas: AlbumData[] = this.trackRepository.getAlbumDataForGenres(genres);

        return this.createAlbumsFromAlbumData(albumDatas);
    }

    private createAlbumsFromAlbumData(albumDatas: AlbumData[]): AlbumModel[] {
        if (albumDatas != undefined) {
            const albums: AlbumModel[] = albumDatas.map((x) => new AlbumModel(x, this.translatorService, this.fileSystem));

            return albums;
        }

        return [];
    }
}
