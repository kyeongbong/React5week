import React from "react";
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";

import {Grid, Image, Text} from "../elements";


const Post = (props) => {

  return (
    <React.Fragment>
      <Grid>

        <Grid is_flex padding="16px">

          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>

          <Grid is_flex width="auto">
            <Text>{props.insert_dt}</Text>
          </Grid>

        </Grid>

        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>

        <Grid>
          <Image shape="rectangle" src={props.src} />
        </Grid>

        <Grid padding="16px">
          <Text bold>댓글 {props.comment_cnt}개</Text>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}

Post.defaultProps = {
  user_info: {
    user_name: "뜨아거!",
    user_profile: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMjhfNjEg%2FMDAxNjQ2MDM0MTkyOTYx.PWa_nDcZDiBA_KX6UAc72T8qmgGHN4IawIOTDOkqQ84g.truc1McnxFZW_1ezBnry5QZHj-NV_M3wptU4fV-S1wwg.PNG.mochimon%2Fillust%25A3%25DF96570226%25A3%25DF20220228%25A3%25DF004105.png&type=a340",
  },
  image_url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMjhfNjEg%2FMDAxNjQ2MDM0MTkyOTYx.PWa_nDcZDiBA_KX6UAc72T8qmgGHN4IawIOTDOkqQ84g.truc1McnxFZW_1ezBnry5QZHj-NV_M3wptU4fV-S1wwg.PNG.mochimon%2Fillust%25A3%25DF96570226%25A3%25DF20220228%25A3%25DF004105.png&type=a340",
  contents: "뜨아거네요!",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
};

export default Post;