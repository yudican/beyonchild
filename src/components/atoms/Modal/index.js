import React from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import IconSuccess from '../../../assets/Image/success.svg';
import {DARK_COLOR} from '../../../utils/constant/color';
import {scaleHeight, scaleWidth} from '../../../utils/helper';
import TextView from '../TextView';
import {useSelector, useDispatch} from 'react-redux';
import {toggleModalConfirmation} from '../../../config/redux/actions/globalAction';
const ModalInformation = () => {
  const dispatch = useDispatch();
  const {modalInformationVisible, modalInformationMessage} = useSelector(
    state => state.global,
  );
  return (
    <Modal
      visible={modalInformationVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => dispatch(toggleModalConfirmation())}
      style={{alignItems: 'center'}}>
      <TouchableOpacity
        style={styles.modalContainer}
        onPressOut={() => dispatch(toggleModalConfirmation())}>
        <View style={styles.modalContentContainer}>
          <TouchableOpacity activeOpacity={1}>
            <View style={styles.modalContent}>
              <IconSuccess height={scaleHeight(15)} />
              <TextView
                size={14}
                color={DARK_COLOR}
                type={'Medium'}
                style={styles.modalContentTitle}>
                {modalInformationMessage}
              </TextView>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {flex: 1, backgroundColor: 'rgba(53, 59, 72,0.7)'},
  modalContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: scaleWidth(70),
    height: scaleWidth(70),
    borderRadius: scaleHeight(2),

    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContentTitle: {
    textAlign: 'center',
    marginHorizontal: scaleWidth(5),
    marginTop: scaleHeight(2),
  },
});

export default ModalInformation;
