import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as Checked } from '../assets/ic_checked.svg';

function SubCategory(props) {
  let params = useParams();
  const url = isChecked()
    ? `/tienda/mercadona/${params.categoryId}`
    : `/tienda/mercadona/${params.categoryId}/${props.id}`;

  return (
    <>
      <div className="all">
        <div className="subCategory__container">
          <Link to={url}>
            <div className="subCategory__info">
              <div className="subCategory__icon">
                <img src={props.img} alt="" />
              </div>
              <div className="subCategory__title">
                <span>{props.name}</span>
              </div>
            </div>
            {isChecked() ? <Checked className="checked__icon" /> : ''}
          </Link>
        </div>
      </div>
    </>
  );
  function isChecked() {
    return parseInt(params.subCategoryId) === props.id;
  }
}

export default SubCategory;
