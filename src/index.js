import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import './style.scss';

//import edit from './edit';
//import save from './save';


// Child Blocks

import { metadata, name, settings } from './blocks/calculator';
registerBlockType({name, ...metadata}, settings);