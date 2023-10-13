import express from 'express';
import { 
    getAllCustomItems, 
    getCustomItemById, 
    createCustomItem, 
    updateCustomItem, 
    deleteCustomItem 
} from '../controllers/customItems.js';  

const router = express.Router();

router.get('/', getAllCustomItems);

router.get('/:id', getCustomItemById);

router.post('/', createCustomItem);

router.put('/:id', updateCustomItem);

router.delete('/:id', deleteCustomItem);

export { router as customItemsRouter };
