import React from 'react';
import { lazy, Suspense } from 'react';
const Splitting1 = lazy(() => import('./Splitting1'));
const Splitting2 = lazy(() => import('./Splitting2'));
const Splitting3 = lazy(() => import('./Splitting3'));

export default function Home () {
   
    return(

        <div className="container-fluid">
            <h1 className="mt-4" id="msg_abertura"></h1>
            <Suspense fallback={<p>Carregando...</p>}><Splitting1 /></Suspense>
           
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel"> 
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <Suspense fallback={<p>Carregando...</p>}><Splitting2 /></Suspense>
                    
                    <Suspense fallback={<p>Carregando...</p>}><Splitting3 /></Suspense>
                    
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
        
    );
   
}
