import React from "react";

import Carousel from "../../../components/carosuel/carosuel";
import useFetch from "../../../hooks/useFetch";

const recommendations = ({ mediaType, id }) => {
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

export default recommendations;