import React from "react";
import "@components/global_root.css";
import "../style/inventory_root_style.css";


export type Type_for_InventoryList<T> = {
    selectStyleType?: string;
    data_list: T[];
    group_first: [string, string];
    group_second?: [string, string];
    group_third?: [string, string];
    group_fourth?: [string, string];
    handleClick_first?: () => void;
    handleClick_second?: () => void;
    handleClick_third?: () => void;
};

export type Type_for_groupFor_LIST = {
    tittle_group_first: string;
    value_group_first: string;
    tittle_group_second?: string;
    value_group_second?: string;
    tittle_group_third?: string;
    value_group_third?: string;
    tittle_group_fourth?: string;
    value_group_fourth?: string;
}

function InventoryList<T>({
    selectStyleType,
    data_list,
    group_first,
    group_second,
    group_third,
    group_fourth,
    handleClick_first,
    handleClick_second,
    handleClick_third,
}: Type_for_InventoryList<T>): JSX.Element {

    const [groupFor_LIST, setGroupFor_LIST] = React.useState<Type_for_groupFor_LIST[]>([]);

    React.useEffect(() => {
        const updatedList = data_list.map((item: T) => {
            return {
                tittle_group_first: group_first && group_first[0],
                value_group_first: group_first && String(item[group_first[1] as keyof T]),

                tittle_group_second: group_second && group_second[0],
                value_group_second: group_second && String(item[group_second[1] as keyof T]),

                tittle_group_third: group_third && group_third[0],
                value_group_third: group_third && String(item[group_third[1] as keyof T]),

                tittle_group_fourth: group_fourth && group_fourth[0],
                value_group_fourth: group_fourth && String(item[group_fourth[1] as keyof T]),
            };
        });

        setGroupFor_LIST(updatedList);
    }, [data_list, group_first, group_second, group_third, group_fourth]);

    return (

        <div
            className={`${selectStyleType} inventoryList`}>
            {
                groupFor_LIST.map((item, key) =>
                    <div
                        className={`${selectStyleType} inventoryList_items`}
                        key={key}>
                        <div className={`${selectStyleType} inventoryList_items_groupFirst invGroup`}>
                            <div>
                                {item.tittle_group_first}
                            </div>
                            <div>
                                {item.value_group_first}
                            </div>
                        </div>
                        <div className={`${selectStyleType} inventoryList_items_groupSecond invGroup`}>
                            <div>
                                {item.tittle_group_second}
                            </div>
                            <div>
                                {item.value_group_second}
                            </div>
                        </div>
                        <div className={`${selectStyleType} inventoryList_items_groupThird invGroup`}>
                            <div>
                                {item.tittle_group_third}
                            </div>
                            <div>
                                {item.value_group_third}
                            </div>
                        </div>
                        <div className={`${selectStyleType} inventoryList_items_groupFourth invGroup`}>
                            <div>
                                {item.tittle_group_fourth}
                            </div>
                            <div>
                                {item.value_group_fourth}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default InventoryList;
