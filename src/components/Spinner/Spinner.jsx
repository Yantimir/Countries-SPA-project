import style from "./style.module.css";
import classnames from "classnames";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Spinner = () => {
    return (
        <Wrapper>
            <div className={classnames(style.spinner, style["spinner--gray"])}></div>
        </Wrapper>

    )
}

export default Spinner;