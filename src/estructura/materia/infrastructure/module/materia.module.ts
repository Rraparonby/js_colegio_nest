import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {MateriaController} from '../controller/materia.controller';
import {MateriaLogic} from '../../application/logic/materia.logic';
import {MateriaData} from '../../infrastructure/data/materia.data';
import {Materia} from '../../domain/model/materia';


@Module({
	imports: [TypeOrmModule.forFeature([Materia])],
    controllers: [MateriaController],
    providers: [MateriaLogic,MateriaData],
	exports: [MateriaLogic,MateriaData]
})
class MateriaModule {

}

export {MateriaModule}