import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { mainRoutes } from './routes';

const InternalRouter: FC = () => {
    return (
        <Routes>
            {Object.values(mainRoutes).map((r)=><Route key={r.title} path={r.path} element={<r.element/>}/>)}
        </Routes>
    )
};
export default InternalRouter;
