<script>
import Content from "./Content";

export default {
  name: "Tabs",
  data() {
    return{
        panes: []
    }
  },
  components: {
    Content
  },
  props: {
    currentIndex: {
      type: [String, Number],
      default: ""
    }
  },
  methods: {
    onChangeIndex(index) {
      this.$emit("changeKey", index);
    }
  },
  render() {
    return (
      <div>
        <ul class="tabs-header">{this.$slots.default}</ul>
        <Content panes={ this.panes }/>
      </div>
    );
  }
};
</script>
<style scoped>
.tabs-header {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #ededed;
}
</style>

