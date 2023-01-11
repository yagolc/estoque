import React from "react";

import App from "../App";
import CadastroProduto from "../componentes/cadastroProduto/CadastroProduto";

const Routes = () => {

    return (
        <BrowserRouter>
            <Route path={'/'} exact component={App} />
            <Route path={'/CadastroProduto'} component={CadastroProduto} />
            
        </BrowserRouter>
    )

}

export default Routes