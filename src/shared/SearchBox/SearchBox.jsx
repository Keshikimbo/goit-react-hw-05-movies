import PropTypes from 'prop-types';
import { ErrorMessage, Formik } from "formik";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Button, ButtonLabel, Container, Input, SearchForm } from "./SearchBox.styled";

export default function SearchBox({onSubmit}) {
    const handleSubmit = (values) => {
        if (values.query.trim() === '') {
            return toast.info('Fill this field.')
        };
        
        onSubmit(values.query.trim());
    };

    return (
        <Container>
            <Formik
                initialValues={{ query: "" }}
                onSubmit={handleSubmit}
            >
                <SearchForm>
                    <Button type="submit">
                        <ButtonLabel>
                            Search
                        </ButtonLabel>
                    </Button>

                    <Input
                        name="query"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movie"
                    />
                    <ErrorMessage name="query" />
                </SearchForm>
            </Formik>
        </Container>
    );
};

SearchBox.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
