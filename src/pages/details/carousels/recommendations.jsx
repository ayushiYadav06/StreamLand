import React from "react";

import Carousel from "../../../components/carosuel/Carosuel";
import useFetch from "../../../hooks/UseFetch";

const Recommendations = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendations;