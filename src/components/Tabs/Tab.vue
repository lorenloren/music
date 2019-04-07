<script>
export default {
  name: "Tab",
  props: {
    className: {
      type: String,
      default: ""
    },
    index: {
      type: [String, Number],
      default: 0
    }
  },
  mounted() {
    this.$parent.panes.push(this);
  },
  computed: {
    active() {
      return this.$parent.currentIndex === this.index;
    }
  },
  methods:{
    getIndexHandler(event){
      // console.log(this.index);
      this.$parent.onChangeIndex(this.index);
    }
  },
  render() {
    let className = {
      tab: true,
      active:this.active
    }
    return <li class={ className } onClick={ this.getIndexHandler.bind(this) }>{this.className}</li>;
  }
};
</script>
<style scoped>
.tab {
  list-style: none;
  line-height: 40px;
  margin-right: 30px;
  position: relative;
  flex: 1;
  text-align: center
}

.tab.active {
  border-bottom: 2px solid red;
}
</style>

