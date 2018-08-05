import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ConsumerContent from '../components/ConsumerContent';
import * as ConsumerContentActions from '../actions/consumerContent';
import * as ConsumerActions from '../actions/consumer';
import * as ContractActions from '../actions/contract';
import { getSelectedConsumer } from '../utils/store';

function mapStateToProps(state) {
  return {
    selectedConsumer: getSelectedConsumer(state),
    isEditingName: state.consumerContent.isEditingName,
    accounts: state.contract.accounts,
    isVisibleActivationForm: state.consumerContent.isVisibleActivationForm,
    uploadingConsumerIds: state.consumer.uploadingConsumerIds,
    files: state.consumerContent.files,
    downloadingContexts: state.consumer.downloadingContexts,
    isDeletingFile: state.consumerContent.isDeletingFile,
    deletingFileIds: state.consumer.deletingFileIds,
    balance: state.consumerContent.balance
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...ConsumerContentActions,
    getAccounts: ContractActions.getAccounts,
    upload: ConsumerActions.upload,
    download: ConsumerActions.download,
    deleteFile: ConsumerActions.deleteFile
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ConsumerContent);
