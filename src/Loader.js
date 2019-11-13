import React from 'react';

function MapLoader() {
    return (
        <div className="loader center">
            <p>
                Loading map data...
                <i className="fa fa-cog fa-spin" />
            </p>
        </div>
    );
}

export default MapLoader;
