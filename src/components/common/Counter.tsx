import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {Button, ButtonGroup} from "@mui/material";
import {inject, observer} from "mobx-react";
import React from "react";

import {StoresNames} from "@/stores/StoreDictionary";
import colors from "@/styles/colors.modules.scss";

const Counter = inject(StoresNames.CartStore)(observer((props: any) => {
  return (
    <ButtonGroup size="small">
      <Button onClick={() => props.CartStore.decrementAmount(props.item)}>
        <RemoveIcon/>
      </Button>
      <Button style={{ color: colors.primary, borderColor: colors.primarySoft }} disabled>
        {props.item.amount}
      </Button>
      <Button onClick={() => props.CartStore.incrementAmount(props.item)}>
        <AddIcon/>
      </Button>
    </ButtonGroup>
  );
}));

export default Counter;
